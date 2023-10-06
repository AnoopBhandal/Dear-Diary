'use strict';
const diary = document.querySelector('.diary-entry');
const homepage = document.querySelector('.homepage');
const addDiary = document.querySelector('.add-diary');

const modal = document.getElementById('modal');
const closeButton = document.querySelector('.close');
const diaryForm = document.getElementById('diary-form');

// const toolbar = document.querySelector('.toolbar-container');

// let prevScrollPos = diary.scrollY;

// diary.addEventListener('scroll', () => {
//   const currentScrollPos = diary.scrollY;

//   if (prevScrollPos > currentScrollPos) {
//     // User is scrolling up, show the toolbar
//     toolbar.classList.add = 'show';
//     toolbar.classList.remove = 'hide';
//   } else {
//     // User is scrolling down, hide the toolbar
//     toolbar.classList.add = 'hide';
//     toolbar.classList.remove = 'show';
//   }

//   prevScrollPos = currentScrollPos;
// });
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];

const getApiData = async () => {
  const res = await fetch('http://localhost:3000/diaries');
  const data = await res.json();
  console.log(data);

  displayAllData(data);
};

const displayAllData = (data) => {
  const allData = data.map((d) => {
    const timeString = d.date.slice(11, 16);
    const dateString = d.date.slice(0, 10);
    return `<div class="list-container show">
      <img src=https://cdn-icons-png.flaticon.com/128/3237/3237795.png
      alt="diary"/>
      <div class="details-container">
      <div class="date-container">
      <p>${timeString}</p>
      <p>${d.title}</p>
      </div>
      <p class="date">${dateString}</p>
      </div>
      <img
      style="width: 25px; cursor: pointer; opacity: 0.2"
      src="https://cdn-icons-png.flaticon.com/256/32/32213.png"
      alt="arrow"
      />
      </div>`;
  });
  diary.innerHTML = allData.join('');
};

homepage.addEventListener('click', getApiData);

const getOne = async () => {
  const res = await fetch('http://localhost:3000/diaries/1');
  const data = await res.json();
};

getOne();

// Modal Window

addDiary.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close the modal if the user clicks outside of it
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// Form Submission

diaryForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;

  try {
    const res = await fetch('http://localhost:3000/diaries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content }),
    });

    if (res.ok) {
      console.log('Diary entry created successfully');
      modal.style.display = 'none';
    } else {
      console.error('Error creating entry');
    }
  } catch (e) {
    console.log(e.message);
  }
});
