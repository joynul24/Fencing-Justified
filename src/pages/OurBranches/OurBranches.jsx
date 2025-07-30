
// const OurBranches = () => {
//     return (
//         <div className="max-w-7xl mx-auto">
//             <div className="flex justify-center">
//                 <button className="btn-primary">Our Branches</button>
//                 {/* Tabs Section */}
                
//             </div>
//         </div>
//     );
// };

// export default OurBranches;





import { useState } from "react";
import img1 from "../../assets/Frame-6.png"
import img2 from "../../assets/Frame-4.png"
import img3 from "../../assets/Frame-3.png"
import img4 from "../../assets/Frame-2.png"
import img5 from "../../assets/Frame-1.png"
import img6 from "../../assets/Frame.png"
import Coimbatore from "../../components/LocationForms/Coimbatore";
import Chennai from "../../components/LocationForms/Chennai";
import Hyderabad from "../../components/LocationForms/Hyderabad";
import Goa from "../../components/LocationForms/Goa";
import Kochi from "../../components/LocationForms/Kochi";
import Mumbai from "../../components/LocationForms/Mumbai";

const branchesData = [
  {
    id: 1,
    name: "Coimbatore",
    image: img1,
    content: <Coimbatore></Coimbatore>,
  },
  {
    id: 2,
    name: "Chennai",
    image: img2,
    content: <Chennai></Chennai>,
  },
  {
    id: 3,
    name: "Hyderabad",
    image: img3,
    content: <Hyderabad></Hyderabad>,
  },
  {
    id: 4,
    name: "Goa",
    image: img4,
    content: <Goa></Goa>,
  },
  {
    id: 5,
    name: "Kochi",
    image: img5,
    content: <Kochi></Kochi>,
  },
  {
    id: 6,
    name: "Mumbai",
    image: img6,
    content: <Mumbai></Mumbai>,
  },
];

const OurBranches = () => {
  const [selectedBranch, setSelectedBranch] = useState(branchesData[0]);

  return (
    <div className="max-w-7xl mx-auto py-10 md:py-20">
      <div className="flex justify-center gap-6 flex-wrap">
        {branchesData.map((branch) => (
          <div
            key={branch.id}
            className={`cursor-pointer border-2 rounded-lg transition-all duration-300 ${
              selectedBranch.id === branch.id
                ? "bg-[#eff8cf] border-[#B0DD1D] scale-105"
                : "border-transparent"
            }`}
            onClick={() => setSelectedBranch(branch)}
          >
            <img
              src={branch.image}
              alt={`Branch ${branch.id}`}
              className="w-20 md:w-25 h-10 md:h-15 object-cover rounded-md"
            />
              <p className="mt-2 text-sm font-medium uppercase text-center">{branch.name}</p>
          </div>
        ))}
      </div>

      <div className="md:mt-5 md:px-4">{selectedBranch.content}</div>
    </div>
  );
};

export default OurBranches;
