import PromptCard from './PromptCard';

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  
  // if (data !== null && typeof data !== 'undefined' && data.length > 0) {
  //    let posts = data;
  //    console.log(posts);
  // }
  return (
    <section className='w-full'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{name} Profile</span>
      </h1>
      <p className='desc text-left'>{desc}</p>

      <div className='mt-10 prompt_layout'>
        {data !== null && typeof data !== 'undefined' && data.length > 0 
          ? data.map((post) => {
            return (
              <PromptCard 
                key={post._id}
                post={post}
                handleEdit={() => handleEdit && handleEdit(post)}
                handleDelete={ () => handleDelete && handleDelete(post) }
              />
            );
          }) : null
        }
    </div>

    </section>
  )
}

export default Profile