export default function ContentSection({title, content,button}) {
  return (
    
    <div className="">
        <h1 className=" py-8 px-20 my-20 text-4xl w-[410px] mx-auto font-bold border-4 border-purple-500 bg-black inline-block tracking-[0.3em] uppercase">
          {title}
        </h1>
        <p className=" md:px-0 px-4 text-xl md:mb-8 text-start md:text-justify ">{content}</p>
        
            
   </div>
  );
}
