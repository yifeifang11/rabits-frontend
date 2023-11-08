const LevelBar = ({ carrots }) => {
  return (
    <div className="w-full">
      <div>
        {carrots < 10 ? (
          <div>
            <p>Level 1</p>
            <div className="h-8 w-full border border-1 border-black">
              <div
                className={`h-full bg-orange-400`}
                style={{ width: `${carrots * 10}%` }}
              ></div>
            </div>
            <img
              src={require("../assets/rabbit1.jpg")}
              alt="rabbit"
              style={{ width: 300, height: 300 }}
              className="object-cover mx-auto my-5"
            />
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div>
        {carrots >= 10 && carrots < 50 ? (
          <div>
            <p>Level 2</p>
            <div className="h-8 w-full border border-1 border-black">
              <div
                className={`h-full bg-orange-400`}
                style={{ width: `${((carrots - 10) * 5) / 2}%` }}
              ></div>
            </div>
            <img
              src={require("../assets/rabbit2.jpg")}
              alt="rabbit"
              style={{ width: 300, height: 300 }}
              className="object-cover mx-auto my-5"
            />
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div>
        {carrots >= 50 && carrots < 100 ? (
          <div>
            <p>Level 3</p>
            <div className="h-8 w-full border border-1 border-black">
              <div
                className={`h-full bg-orange-400`}
                style={{ width: `${((carrots - 50) * 10) / 5}%` }}
              ></div>
            </div>
            <img
              src={require("../assets/rabbit3.jpg")}
              alt="rabbit"
              style={{ width: 300, height: 300 }}
              className="object-cover mx-auto my-5"
            />
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div>
        {carrots >= 100 && carrots < 500 ? (
          <div>
            <p>Level 4</p>
            <div className="h-8 w-full border border-1 border-black">
              <div
                className={`h-full bg-orange-400`}
                style={{ width: `${((carrots - 100) * 5) / 20}%` }}
              ></div>
            </div>
            <img
              src={require("../assets/rabbit4.jpg")}
              alt="rabbit"
              style={{ width: 300, height: 300 }}
              className="object-cover mx-auto my-5"
            />
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div>
        {carrots >= 500 ? (
          <div>
            <p>Level 5</p>
            <div className="h-8 w-full border border-1 border-black">
              <div
                className={`h-full bg-orange-400`}
                style={{
                  width:
                    carrots <= 1000
                      ? `${((carrots - 500) * 10) / 50}%`
                      : "100%",
                }}
              ></div>
            </div>
            <img
              src={require("../assets/rabbit5.jpg")}
              alt="rabbit"
              style={{ width: 300, height: 300 }}
              className="object-cover mx-auto my-5"
            />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default LevelBar;
