// import useInputHandle from "./useInputState";

import { useInputHandle } from "./useInputState";

// const HookForm = () => {
//   const myOwnHook = useInputHandle("masumbill");
//   console.log(myOwnHook);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("result:", myOwnHook.value);
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input {...myOwnHook} type="email"></input>
//         <input type="submit" value="submit" />
//       </form>
//     </div>
//   );
// };

// export default HookForm;

const HookForm = () => {
  const myhook = useInputHandle("muhammad");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted data is", value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" id="" />
        <br></br>
        <input type="email" {...myhook} name="email"></input>
        <br></br>
        <input type="password" name="password"></input>
        <br></br>
        <input type="submit" value="submit"></input>
      </form>
    </div>
  );
};

export default HookForm;
