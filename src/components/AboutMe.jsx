export default AboutMe;
function AboutMe() {
  return (
    <div>
      <div className="container bg-white">
        {/* ABOUT ME */}
        <div className="flex justify-center">
          <button className="rounded-lg text-gray-600 text-sm px-3 py-1 bg-gray-200">
            About me
          </button>
        </div>

        <div>
          <div>
            <div className="picContainer">
              <img
                src="https://picjumbo.com/wp-content/uploads/beautiful-nature-scenery-free-photo-2210x1473.jpg"
                alt=""
              />
            </div>
          </div>
          <div>
            <p>Curious about me? Here you have it:</p>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
