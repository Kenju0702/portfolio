export default function ContentSection({title, content,button}) {
  return (
    
    <div className="">
        <h1 className=" py-8 px-[96px] my-[96px] text-4xl mx-auto font-bold border-4 border-white bg-black inline-block tracking-[0.3em] uppercase">
          {title}
        </h1>
        <p className="text-xl my-12 text-justify ">{content}</p>
        {button?<button className=" border-r-2 border-l-2 cursor-pointer py-2 px-2 font-bold my-12">
          {button}
        </button>:null}
        
     
   </div>
  );
}
