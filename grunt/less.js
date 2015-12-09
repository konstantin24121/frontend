module.exports = 
{
    options: {
        paths: ['sources/less/'],
        sourceMap: true,
    },
    files: {
        expand: true,
        cwd: "sources/less/views",
        dest: "web/css/",
        src: "*.less",
        ext: ".css"
    }
}