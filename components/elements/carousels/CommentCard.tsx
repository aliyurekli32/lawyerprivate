import cardData from '../../../assets/data.json'
import { comments } from '../../../styles/styled'
import Card from '../cards/Card'

const CommentCard = () => {

  return (
    <div className={comments}>
    <div className="pic-ctn">
        {
            cardData.map((item)=>{
                return(
                    <div className='img1'>
                        <Card key={item.id} item={item}/>
                    </div>
                    
                )
            })
        }
   
        
    </div>
    </div>
  )
}

export default CommentCard