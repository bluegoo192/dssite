from locust import HttpLocust, TaskSet

def login(l):
    l.client.post("/login", {"email":"js@a.com", "password":"test"})

def index(l):
    l.client.get("/")

def profile(l):
    l.client.get("/profile")

def test(l):
    l.client.get("/locust")

class UserBehavior(TaskSet):
    tasks = {index: 2, profile: 1}

    def on_start(self):
        login(self)

class TestLocustBehavior(TaskSet):
    tasks = {test: 2}

class WebsiteUser(HttpLocust):
    task_set = TestLocustBehavior
    min_wait = 5000
    max_wait = 9000
