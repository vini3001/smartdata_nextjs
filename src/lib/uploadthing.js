import { createUploadthing } from 'uploadthing/next-legacy'
// import { UploadThingError } from 'uploadthing/server'

const f = createUploadthing()

// const auth = (req, res) => ({ id: 'fakeId' }) // Fake auth function

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  logoUploader: f({ image: { maxFileSize: '2MB' } })
    // Set permissions and file types for this FileRoute
    // .middleware(async ({ req, res }) => {
    //   // This code runs on your server before upload
    //   const user = await auth(req, res)

    //   // If you throw, the user will not be able to upload
    //   if (!user) throw new UploadThingError('Unauthorized')

    //   // Whatever is returned here is accessible in onUploadComplete as `metadata`
    //   return { userId: user.id }
    // })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log('Upload complete for userId:', metadata.userId)

      console.log('file url', file.url)

      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      return {}
    }),
}

// export type OurFileRouter = typeof ourFileRouter;
