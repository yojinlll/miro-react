export default `
<button onClick={() => setX(!x)}>button x</button>
<Modal
  visible={x}
  onCancel={xcloseModal}
  title={"title x"}
  mask={false}
  className={'m-modal'}
>
  <div>test</div>
</Modal>
`