# GrapQL Rest API

Database migration. Migration by script
```
# To mLab service
python migration.py mlab 

# To local db
python migration.py local

```

Note: If you got `Failed: error connecting to db server: no reachable servers` just run again script.

For local env
```
npm run start:local
```
Depend on:
- mongodb (in dev)

For heroku
```
npm run start:heroku
```
Depend on:
- network

For docker compose
```
docker-compose up
```
Depend on:
- docker
- docker-compose

Urls:
- `http://localhost:3000`
- `http://localhost:3000/swagger`
- `http://graphqlrestapi.herokuapp.com`
- `http://graphqlrestapi.herokuapp.com/swagger`

![GitLab](https://carlchenet.com/wp-content/uploads/2016/01/gitlab-150x150.png) ![Heroku](http://www.starterslist.com/wp-content/uploads/2017/07/heroku-150x150.jpg) ![mLab](https://cdn1.vc4a.com/media/2015/04/19131542/mlab_logo1-150x150.png) ![node](https://131707-379326-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2017/08/node-150x150.png) ![graphql](https://img.stackshare.io/service/3820/12972006.png) ![mongodb](https://assets.scaphold.io/community/blog/migrate-to-mongodb/mongodb.png)