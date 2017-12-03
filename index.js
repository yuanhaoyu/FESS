var FESS = function (url, rules, all) {
  this.url = url ? url : ''
  this.rules = rules ? rules : []
  this.all = all ? all : []
  this.kind = ''
  this.apiList = []
  this._send = (data) => {
    let img = new Image()
    let param = {
      content: JSON.stringify(data)
    }
    img.src = this.url + '?' + encodeURI(JSON.stringify(param))
  }
  this._filter = () => {
    this.apiList = []
    if (all) {
      for (let i in all) {
        if (rules.length > 0) {
          for (let j in rules) {
            if (rules[j] === all[i].name) {
              this.apiList.push(all[i])
            }
          }
        } else {
          console.error('err rules lenght')
        }
      }
    } else {
      console.error('err all must be a object')
    }
  }
  this.$setKind = (kind) => {
    this.kind = kind
  }
  this.$send = (data) => {
    let img = new Image()
    img.src = this.url + '?' + encodeURI(JSON.stringify(data))
  }
  this.$sendErr = (kind = 'default', lv = 0, content = '') => {
    let data = {
      kind: kind,
      lv: lv,
      content: content
    }
    let img = new Image()
    img.src = this.url + '?' + encodeURI(JSON.stringify(data))
  }
  this.$install = (callback) => {
    let self = this    
    this._filter()
    for (let i = 0; i < this.apiList.length; i++) {
      let temp = this.apiList[i]
      let tempName = this.apiList[i].name
      this.all[tempName] = function () {
        if (callback) {
          // use callback send by yourself
          callback(arguments)          
        } else {
          // default send
          self._send([...arguments])
        }
        return temp(...arguments)
      }
    }
    return this.all
  }
}

// export default FESS


