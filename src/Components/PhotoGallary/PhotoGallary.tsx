const PhotoGallary = () => {
    return (
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mt-10 mb-10 uppercase">Some of our Special Grounds</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img
            className="w-full h-60 object-cover rounded-md"
            src="https://i.ibb.co/PM1QDXN/How-to-build-a-tennis-court-1440x1080.jpg"
            alt="Tennis Court"
          />
          <img
            className="w-full h-60 object-cover rounded-md"
            src="https://i.ibb.co/bWJmBKq/DJI-0118-1000x666.jpg"
            alt="Stadium"
          />
          <img
            className="w-full h-60 object-cover rounded-md"
            src="https://i.ibb.co/f9kfwrR/istockphoto-1082611450-612x612.jpg"
            alt="Sports Arena"
          />
          <img
            className="w-full h-60 object-cover rounded-md"
            src="https://i.ibb.co/9wXqjM4/152-A7149-min.jpg"
            alt="Football Field"
          />
          <img
            className="w-full h-60 object-cover rounded-md"
            src="https://i.ibb.co/Yb0TSsN/hq720.jpg"
            alt="Basketball Court"
          />
          <img
            className="w-full h-60 object-cover rounded-md"
            src="https://i.ibb.co/CWCgTNk/1.jpg"
            alt="Swimming Pool"
          />
        </div>
      </div>
    );
  };
  
  export default PhotoGallary;
  