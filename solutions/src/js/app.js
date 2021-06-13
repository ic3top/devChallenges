import '../scss/style.scss';
import 'winbox/dist/winbox.bundle'

const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')

let width = countWidth();

function countWidth() {
  return window.innerWidth > 400 ? '400px' : '100%'
}

window.addEventListener('resize', () => {
  width = countWidth();
});

about.addEventListener('click', () => {
  new WinBox({
    title: 'About',
    class: [
      'no-full',
      'no-max'
    ],
    width,
    height: '400px',
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
    mount: aboutContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    }
  })
})

contact.addEventListener('click', () => {
  new WinBox({
    title: 'Contact Me',
    class: [
      'no-full',
      'no-max'
    ],
    width,
    height: '400px',
    top: 20,
    right: 10,
    bottom: 10,
    left: 25,
    mount: contactContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    }
  })
})
