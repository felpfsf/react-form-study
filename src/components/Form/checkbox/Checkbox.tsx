interface ICheckbox {
  type: string
  text: string
  onChange: () => void
}

const Checkbox = (props: ICheckbox) => {
  return (
    <>
      <label>
        <input {...props} />
        {props.text}
      </label>
    </>
  )
}

export default Checkbox
