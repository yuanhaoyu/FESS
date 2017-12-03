var API = {
  test (data,data2,data3) {
    // console.log(data)
    setTimeout(() => {
        console.log(data)
        console.log(data2)
        console.log(data3)
      }, 1000)
  },
  test2 (data) {
    setTimeout(() => {
      console.log(data)
    }, 200)
  },
  test3 (data) {
    setTimeout(() => {
      console.log(data)
    }, 200)
  }
}

// export default API