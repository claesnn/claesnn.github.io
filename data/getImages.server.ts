const imagesSource = import.meta.glob("~/assets/images/*.jpg", {
  as: "url",
  eager: true,
})

const images = Object.entries(imagesSource).map(([key, value]) => ({
  src: key.split("/").pop(),
}))

export default images
