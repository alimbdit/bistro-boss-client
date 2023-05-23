import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './Featured.css';

const Featured = () => {
  return (
    <section className="featured-item bg-fixed  text-white ">
   <div className="bg-slate-900 bg-opacity-50 pt-8 my-20">
   <SectionTitle
        heading="Featured Item"
        subHeading="Check it out"
      ></SectionTitle>

      <div className="md:flex justify-center items-center pb-20 pt-10 px-36">
        <div >
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p className="text-2xl">March 20, 2023</p>
          <p className="uppercase text-2xl">WHERE CAN I GET SOME?</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
            perferendis iste dolores quisquam distinctio fuga consequatur quam,
            quaerat facilis ex beatae incidunt recusandae accusamus animi
            asperiores ratione, cum ab odio ea eligendi quibusdam! Nemo possimus
            perferendis nobis, placeat, optio qui quam repellendus similique
            veniam nisi animi reiciendis totam? Nobis, totam?
          </p>
          <button className="btn btn-outline border-0 border-b-4 text-white  mt-4">Read More</button>
        </div>
      </div>
   </div>
    </section>
  );
};

export default Featured;
