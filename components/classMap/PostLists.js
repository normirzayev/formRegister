export default function PostLists({name, id, remove}) {
  return(
    <li>
      {name}
      <button onClick={() => remove(id)}>Delete</button>
    </li>
  )
}