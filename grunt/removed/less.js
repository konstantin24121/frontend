module.exports = 
{
    options: {
        paths: ['source/less/'],
        sourceMap: true,
    },
    files: {
        expand: true,
        cwd: "source/less/views",
        dest: "web/css/",
        src: "*.less",
        ext: ".css"
    }
}