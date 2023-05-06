export default function CreateOption ({array}){
  return (
    <>
      {array.map(num =>
          <option value={num.value}>{num.text}</option>
        )}
    </>
  )
}