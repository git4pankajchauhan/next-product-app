import mongoose from 'mongoose'

function dbConnect() {
  if (mongoose.connections[0].readyState) {
    console.log('MongoDB already connected')
    return
  }

  mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  mongoose.connection.on('connected', () => {
    console.log('conneted to MongoDB')
  })

  mongoose.connection.on('error', err => {
    console.log('Failed to connect MongoDB', err)
  })
}

export default dbConnect
