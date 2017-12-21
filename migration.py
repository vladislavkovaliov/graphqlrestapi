import os
import sys

##
# Define constant here
#
MAX_ARGV = 7
MLAB     = "mlab"
LOCAL    = "local"

##
# mLab config
#
MLAB_HOST     = "ds159676.mlab.com"
MLAB_PORT     = "59676"
MLAB_USER     = "mlabuser"
MLAB_PASSWORD = "123456"
MLAB_DB       = "graphqlrestapi"

##
# Local config
#
MLAB_HOST_LOCAL = "localhost"
MLAB_PORT_LOCAL = "27017"
MLAB_DB_LOCAL   = "graphqlrestapi"

##
# Define file name that will be table's name
#
COLLECTIONS = ["users", "profiles"]

MIGRATION_CMD       = "mongoimport --db %DATABASE% --collection %COLLECTION% --drop --type json --file src/data/%FILE%.json --jsonArray --host %HOST%:%PORT% -u %USER% -p %PASSWORD%"
MIGRATION_CMD_LOCAL = "mongoimport --db %DATABASE% --collection %COLLECTION% --drop --type json --file src/data/%FILE%.json --jsonArray --host %HOST%:%PORT%"

del sys.argv[0]

env = sys.argv[0]
cmdBuffer = []

if env == MLAB:
  print 'Importing to mLab service now...'

  MIGRATION_CMD = MIGRATION_CMD.replace("%HOST%", MLAB_HOST)
  MIGRATION_CMD = MIGRATION_CMD.replace("%DATABASE%", MLAB_DB)
  MIGRATION_CMD = MIGRATION_CMD.replace("%USER%", MLAB_USER)
  MIGRATION_CMD = MIGRATION_CMD.replace("%PORT%", MLAB_PORT)
  MIGRATION_CMD = MIGRATION_CMD.replace("%PASSWORD%", MLAB_PASSWORD)
  
  for collection in COLLECTIONS: 
    cmdBuffer.append(MIGRATION_CMD.replace("%COLLECTION%", collection).replace("%FILE%",collection))
    
  print "\n".join(cmdBuffer)

  for cmd in cmdBuffer:
    os.system(cmd)

  print 'Importing done.'

if env == LOCAL:
  print 'Importing to localhost service now...'

  MIGRATION_CMD_LOCAL = MIGRATION_CMD_LOCAL.replace("%HOST%", MLAB_HOST_LOCAL)
  MIGRATION_CMD_LOCAL = MIGRATION_CMD_LOCAL.replace("%DATABASE%", MLAB_DB_LOCAL)
  MIGRATION_CMD_LOCAL = MIGRATION_CMD_LOCAL.replace("%PORT%", MLAB_PORT_LOCAL)

  for collection in COLLECTIONS:
    cmdBuffer.append(MIGRATION_CMD_LOCAL.replace("%COLLECTION%", collection).replace("%FILE%",collection))

  print "\n".join(cmdBuffer)

  for cmd in cmdBuffer:
    os.system(cmd)

  print 'Importing done.'

print 'Thank you!'
