class SaverData {
  static listUsers = []
  // this.addDatos( this.nombre,this.edad , this.correo,this.password)

  static addDatos(objDatos) {
    console.log(objDatos)
    this.listUsers.push(objDatos)
    console.log('se guardo Correctamente')
  }
  static length() {
    return this.listUsers.length
  }
  static get(index) {
    return this.listUsers[index]
  }
}