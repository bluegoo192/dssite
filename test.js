const emails = [
    'sudarshankhannan@ucsb.edu',
    'samuelsheridan@ucsb.edu',
    'ernesto01@ucsb.edu',
    'yanbing_zhu@ucsb.edu',
    'm_xia@ucsb.edu',
    'samanthajsolomon@ucsb.edu',
    'grahamfaust@ucsb.edu',
    'alexlai913@gmail.com',
    'eliang@ucsb.edu',
    'pkuang@ucsb.edu',
    'taylorschultz@ucsb.edu',
    'jzjacquelinexzhang@gmail.com',
    'jasmine_m_li@ucsb.edu',
    'cerapaslawsky@ucsb.edu',
    'yyang02@ucsb.edu',
    'fificauso@gmail.com',
    'ealtshule@gmail.com',
    'kennardpeters@ucsb.edu',
    'gnolasco@ucsb.edu',
    'ryantsen@ucsb.edu',
    'sarahfsalem@gmail.com',
];

const m = require('./utils/markMemberAsPaid.js');
emails.forEach(e => m({email: e}).then(console.log).catch(console.log));
