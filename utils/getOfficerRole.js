const db = require('../database/sqlclient.js');

// given a member ID, retrieve a string representing their role/permissions
// returns null for generic members (no special role)
// possible roles can be found in permissions.role in the sql db
const getOfficerRole = async (memberId) => {
  //var query = user.select(user.name, post.body)
  // .from(user.join(post).on(user.id.equals(post.userId))).toQuery();
  const officerRoles = db.officers.join(db.permissions)
    .on(db.officers.permissionId.equals(db.permissions.id));
  const query = db.officers.from(officerRoles)
    .where(db.officers.memberId.equals(memberId));
  const res = await db.query(query);
  if (res.rowCount === 1) {
    return res.rows[0].role;
  }
  // If an officer has multiple roles, there is a problem with the database
  if (res.rowCount > 1) {
    throw `officer with memberId ${memberId} has multiple listed roles`;
  }
  return null;
}

module.exports = getOfficerRole;