const cursor = document.getElementById('cursor')
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px'
  cursor.style.top = e.clientY + 'px'
})
document.querySelectorAll('a,button,.project').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('grow'))
  el.addEventListener('mouseleave', () => cursor.classList.remove('grow'))
})
function setLang(l) {
  document.body.className = l
  document.querySelectorAll('.lbtn').forEach(b => b.classList.toggle('on', b.textContent.toLowerCase() === l))
}
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in') })
}, { threshold: 0.12 })
document.querySelectorAll('.reveal').forEach(el => obs.observe(el))