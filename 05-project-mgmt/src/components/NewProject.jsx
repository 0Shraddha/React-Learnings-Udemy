import React,{useRef} from 'react'
import Input from './Input'
import Modal from './Modal';

const NewProject = ({onAdd, onCancel}) => {

  const modal = useRef();

    const title = useRef();
    const desc = useRef();
    const date = useRef();

    function handleSave(event){
      event.preventDefault();

        const enteredTitle = title.current.value;
        const enteredDesc = desc.current.value;
        const enteredDate = date.current.value;

        console.log("Entered values:", enteredTitle, enteredDesc, enteredDate);

        if (
          enteredTitle.trim() === '' ||
          enteredDesc.trim() === '' ||
          enteredDate.trim() === ''
        ) {
          console.log("Validation failed. Showing modal.");
          modal.current.open();
          return;
        }
      
        console.log("Calling onAdd...");
        onAdd({
          title: enteredTitle,
          desc: enteredDesc,
          date: enteredDate,
        });
      }
      

  return (
    <>
      <Modal ref={modal} btnCaption="Okay">
        <h2 className='text-bold text-xl text-stone-700 my-4'>Invalid Inupt</h2>
        <p className='text-stone-400 mt-2'>Oops ... looks like you forgot to enter a value</p>
      </Modal>
      <div className='w-[35rem] mt-16'>
        <menu className='flex items-center justify-end gap-4 my-4'>
          <li>
              <button className='text-stone-800 hover:text-stone-950' onClick={onCancel}>Cancel</button>
          </li>
          <li>
              <button className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 ' onClick={handleSave}>Save</button>
          </li>
        </menu>
        <div>
      
          <Input label="Title" ref={title} />
          <Input label="Description" textarea ref={desc} />
          <Input label="Due Date" type="date" ref={date} />
        
        </div>
      </div>
    </>
  )
}

export default NewProject
