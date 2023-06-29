
export default function Modal({username, onRemoveItem }) {
  
    function handleModalState(state) {
      onRemoveItem(state)
    }
  
  
    return <div className="modal">
      <div className="backdrop"></div>
      <div className="modal-box">
        <p>ایا می خواهید { username}  را حذف کنید ؟</p>
  
        <div className="modal-btns-wrapper">
          <button className="delete-btn" onClick={()=>handleModalState(true)}> حذف </button>
          <button className="cancel-btn"  onClick={()=>handleModalState(false)}>انصراف</button>
        </div>
        </div>
    </div>
  }