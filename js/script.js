let myForm=document.getElementById('myform')

myForm.addEventListener('submit',(e)=>{
    let siteName=document.getElementById('sitename').value;
    let siteUrl=document.getElementById('siteurl').value;
    
   

    if ( !validationForm(siteName,siteUrl)) {
    return false;   
   }


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
    }else{
        let bookmarks=JSON.parse(localStorage.getItem('bookmarks'));
        
        bookmarks.push(bookmark);
        
        localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    }
    
    document.getElementById('myform').reset();

    fetchbookmarks()
    e.preventDefault();
    
});

function deleteBookmark(url) {
    let bookmarks=JSON.parse(localStorage.getItem('bookmarks'));
    for (let i = 0; i < bookmarks.length; i++) {
        if(bookmarks[i].url==url){
            bookmarks.splice(i,1);
            break
        }
        
    }
    localStorage.setItem('bookmarks',JSON.stringify(bookmarks))
    fetchbookmarks();
}

function fetchbookmarks() {
    let bookmarks=JSON.parse(localStorage.getItem('bookmarks'));

    let bookmarkResults=document.getElementById('bookmarkresults');
    bookmarkResults.innerHTML = '';
    // bookmarkResults.innerHTML=bookmarks

    for (let i = 0; i < bookmarks.length; i++) {
        
        bookmarkResults.innerHTML+=`<div class="card p-3 mb-3 bg-gray"> 
                                    <h3>${bookmarks[i].name}
                                    
                                    <a href="${bookmarks[i].url}" class="btn bg-primary" target="_blank">Visit</a>
                                    <a onClick="deleteBookmark('${bookmarks[i].url}')" href="#" class="btn bg-danger">Delete</a>
                                    </h3>
                                    </div>`;
        
    }
    
}



function validationForm(siteName,siteUrl) {
    if (!siteName||!siteUrl) {
        alert('empty input')
        return false;
    }

    const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
    const regex = new RegExp(expression);

    if (!siteUrl.match(regex)) {
        alert('enter valid url')
        return false;
    }
    return true
}