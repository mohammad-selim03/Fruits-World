const About = () => {
  return (
    
   
    <div className="container mx-auto  m-12">
      <div className="grid grid-cols-2">
        <div className="">
          <img className="w-[600px]" src="/src/assets/img/about.png" alt="" />
        </div>
        <div className="">
          <h1 className="text-7xl font-semibold text-green-600">About Us</h1>
          <p className="mt-4">
          A fruit is the part of a flowering plant that contains the seeds. The skin of a fruit may be thin, tough, or hard. Its insides are often sweet and juicy. But some fruits, including nuts, are dry. Fruits develop from a plants flowers. Some foods that people call vegetables are actually fruits.or example, cucumbers, squashes, and tomatoes are all fruits. They contain seeds, while true vegetables do not. True vegetables are the stems, leaves, or roots of plants.
          </p>
          <div className="card w-auto bg-base-100 mt-20 shadow-xl">
            <div className="card-body">
              <p>
              There are two main types of fruit: fleshy fruits and dry fruits. In fleshy fruits, the part of the fruit around the seeds is juicy and soft. Apples, berries, oranges, and other fleshy fruits contain many seeds.{" "}
              </p>
            </div>
          </div>
          <button className="btn bg-green-600 mt-8 uppercase  text-white">Read more</button>
        </div>
      </div>
    </div>
  );
};

export default About;
