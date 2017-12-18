import os
import sys

MAX_ARGV = 7
MLAB = "mlab"
LOCAL = "local"

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
LOCAL_DB       = ""
LOCAL_USER     = ""
LOCAL_PASSWORD = ""

COLLECTIONS = ["users", "profiles"]
MIGRATION_CMD = "mongoimport --db %DATABASE% --collection %COLLECTION% --drop --type json --file src/data/%FILE%.json --jsonArray --host %HOST%:%PORT% -u %USER% -p %PASSWORD%"

del sys.argv[0]

env = sys.argv[0]
cmdBuffer = []

if env == MLAB:
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
if env == LOCAL:
  print LOCAL
