class Video{
    constructor(title,uploader,time ){
        this.title=title;
        this.uploader=uploader;
        this.time=time;
    }
    watch(){
        return `${this.uploader} watched all ${this.time} of ${this.title}!`


    }


};
const film1= new Video(title="harry potter",uploader="ahmed ali MBC2",time=900);
console.log(film1.watch())
const film2=new Video(title="kill bell",uploader="MBC2",time=1800)
console.log(film2.watch())

const videoData = [
    ["Oz","jim karry",5000],
    ["Barbie","bella",900],
    ["Carton","Desney",1000],
    ["Matrix","John",8000],
    ["John Wek","Wiliam",800]
  ];
  
const videoObjects = [];
  for (let data of videoData) {
    const [title, uploader, time] = data;
    const vid = new Video(title, uploader, time);
    videoObjects.push(vid);
    console.log(vid.watch());
  }