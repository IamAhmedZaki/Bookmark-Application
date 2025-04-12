let myForm=document.getElementById('myform')

myForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    let siteName=document.getElementById('sitename').value;
    let siteUrl=document.getElementById('siteurl').value;
    
    let bookmark={
        name:siteName,
        url:siteUrl,
    };

    // localStorage.setItem('test','helloworld');
    // console.log(localStorage.getItem('test'));
    
    if ((localStorage.getItem('bookmarks'))===null) {
        let bookmarks=[];

        bookmarks.push(bookmark);

        localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    }
    
});