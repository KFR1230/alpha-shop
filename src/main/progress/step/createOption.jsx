export default function CreateOption ({array}){
  return (
    <>
      {array.map((num) =>
          <option key={num.id} value={num.value}>{num.text}</option>
        )}
    </>
  )
}