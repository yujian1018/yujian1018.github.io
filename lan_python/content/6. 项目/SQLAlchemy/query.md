
# 查询

query = (session
             .query(User)
             .filter(User.username == "asd")
             .filter_by(username="asd")
             #上面两个都是添加where
             .join(Addreess)#使用ForeignKey
             .join(Addreess,Addreess.user_id==User.id)#使用显式声明
             .limit(10)
             .offset(0)
             )