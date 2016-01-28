module.exports = 
{
	"htaccess": {
      ".htaccess": function(fs, fd, done) {
        fs.writeSync(fd, 'deny from all');
        done();
      }
    }
}