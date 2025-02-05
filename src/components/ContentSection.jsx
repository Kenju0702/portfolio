export default function ContentSection({title, content,button}) {
  return (
    
    <div className="">
        <h1 className=" py-8 px-[96px] my-[96px] text-4xl mx-auto font-bold border-4 border-white bg-black inline-block tracking-[0.3em] uppercase">
          {title}
        </h1>
        <p className="text-xl mt-24 text-justify ">{content}</p>
        {button?<button className=" mt-14 border-r-2 border-l-2 cursor-pointer py-2 px-2 font-bold my-[96px]">
          {button}
        </button>:null}
        
     
   </div>
  );
}
