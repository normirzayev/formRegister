import PostLists from "./PostLists";

export default function Posts ({props, rem}) {
  return(
    <>
      {
        props.length > 0 
        ? props.map(item => (
            <ul key={item.id}>
              <PostLists name={item.name} id={item.id} remove={rem} />
            </ul>
          )) 
        : "malumot yo'q"
      }
    </>
  )
}