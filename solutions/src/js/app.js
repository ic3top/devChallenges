import '../scss/style.scss';
import 'winbox/dist/winbox.bundle'

const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')

let aboutBox
let contactBox
let width = window.innerWidth > 400 ? '400px' : '100%'

window.addEventListener('resize', () => {
  width = window.innerWidth > 400 ? '400px' : '100%'
  if (aboutBox) {
    aboutBox.width = width
  }
  if (contactBox) {
    contactBox.width = width
  }
});

about.addEventListener('click', () => {
  aboutBox = new WinBox({
    title: 'About',
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
  contactBox = new WinBox({
    title: 'Contact Me',
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