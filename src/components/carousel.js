export default function Carousel({slides}){
        return 
        <div>
            <div className="flex">
            {slides.map((s)=>{
                return <Image
                src={s}/>;
            })}
            </div>
            
        </div>
    }