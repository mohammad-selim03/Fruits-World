const Accordian = () => {
  return (
    <div className="my-20 px-8 w-3/4 mx-auto">
      <h1 className="my-16 text-center font-bold text-3xl">
        Frequently Asked Questions!
      </h1>
      <div className="collapse collapse-arrow bg-green-100">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium text-green-500">
        What type number of fruits in world
        </div>
        <div className="collapse-content">
          <p>
          There are over 2,000 different types of fruits, but the Western diet typically only includes about 10% of these. It is also important to note that many fruits have multiple varieties. For example there are more than 7,500 varieties of apples grown throughout the world.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium text-green-500">
        The most grown fruits in Bangladesh
        </div>
        <div className="collapse-content">
          <p>
            {" "}
           Are mango, jackfruit, blackberry, pineapple, banana, litchi, lemon, guava, berry, papaya, tamarind, melon, watermelon, cashew nut, palmyra, and blueberry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
