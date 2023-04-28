from Goals import Goals

class User():
    def __init__(self, Name:str, Age:int, Gender:int, Goals:Goals, UserName:str, Password:str):
        self.name = Name
        self.age = Age
        self.gender = Gender
        self.goals = Goals
        self.username = UserName
        self.password = Password
    
    global Goals

    def CreateUser(self):
        return 0
    
    def Login():
        return 0
    
    def Logout(): 
        return 0