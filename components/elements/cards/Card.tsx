import { BsFillStarFill } from "react-icons/bs"
interface Item {
  id: number;
  name: string;
  comment: string;
}
const starNum=[1,2,3,4,5]
const Card = ({item}:{ item: Item }) => {


  return (
    <>
    <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body -my-8">
            <h2 className="card-title ">{item.name} <span className="inline-block ml-20"></span> {starNum.map(item=><span className="text-yellow-500 space-x-5"><BsFillStarFill/></span>)}   </h2>
            
            <p className="text-justify">{item.comment}</p>
            <div className="card-actions justify-end">
      
            </div>
        </div>
    </div>
    </>
  )
}

export default Card