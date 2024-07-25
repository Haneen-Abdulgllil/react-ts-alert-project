import Alert from "./components/ui/Alert"
import { Ban } from 'lucide-react'
import { Bell } from 'lucide-react'
import { Info } from 'lucide-react'
import { TriangleAlert } from 'lucide-react'
import { MailCheck } from 'lucide-react'

const App = () => {
  return (
    <>
      <Alert 
         type = {"alert-default"}
         icon = {<Bell />}
         title = {"Default plan"}
         desc= {"Go for it"}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione laboriosam debitis blanditiis inventore voluptas ipsam veritatis temporibus fugit cupiditate deleniti autem quasi nesciunt, dolor at unde beatae pariatur aliquam deserunt rerum sequi necessitatibus vitae ullam facilis corporis. Assumenda facere perferendis numquam explicabo accusamus voluptatem dolores, quisquam provident illo unde temporibus culpa modi nihil magni quo a inventore fugit error facilis corrupti itaque quae laborum amet. Quidem modi numquam perferendis tempora reiciendis blanditiis necessitatibus! Vero ex consectetur quisquam, eaque modi culpa aperiam natus odio iste mollitia quidem asperiores labore, veritatis ut. Natus, labore temporibus. Non suscipit laudantium inventore labore, exercitationem excepturi?
        </p>
      </Alert>


      <Alert  
          type = {"alert-danger"}
          icon = {<Ban />}
          title = {"Somthing went wrong"}
          desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. In veniam aspernatur doloribus voluptates rerum commodi non accusamus ab optio fuga illo minus impedit odit magnam praesentium placeat inventore autem debitis, sequi repellendus obcaecati corporis nostrum blanditiis excepturi. Commodi cumque hic facilis quas officiis reiciendis fugit. Fugit earum, exercitationem voluptas ratione, expedita pariatur incidunt, harum tenetur veritatis non sint. Quas animi aperiam officiis tempore qui omnis, iste quae, ipsam sapiente quaerat laudantium, magnam praesentium nemo distinctio architecto accusantium aut. Laboriosam inventore dignissimos hic labore provident laudantium similique veritatis cumque architecto assumenda. Earum molestiae optio voluptas, eum error dicta, temporibus laudantium consectetur assumenda totam nesciunt non maxime quis, eveniet quam.  "
      />


      <Alert  
          type = {"alert-info"}
          icon = {<Info />}
          title = {"Note"}
          desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. In veniam aspernatur doloribus voluptates rerum commodi non accusamus ab optio fuga illo minus impedit odit magnam praesentium placeat inventore autem debitis, sequi repellendus obcaecati corporis nostrum blanditiis excepturi. Commodi cumque hic facilis quas officiis reiciendis fugit. Fugit earum, exercitationem voluptas ratione, expedita pariatur incidunt, harum tenetur veritatis non sint. Quas animi aperiam officiis tempore qui omnis, iste quae, ipsam sapiente quaerat laudantium, magnam praesentium nemo distinctio architecto accusantium aut. Laboriosam inventore dignissimos hic labore provident laudantium similique veritatis cumque architecto assumenda. Earum molestiae optio voluptas, eum error dicta, temporibus laudantium consectetur assumenda totam nesciunt non maxime quis, eveniet quam.  "
      />

<Alert  
          type = {"alert-warning"}
          icon = {<TriangleAlert />}
          title = {"Upgrade your plan"}
          desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. In veniam aspernatur doloribus voluptates rerum commodi non accusamus ab optio fuga illo minus impedit odit magnam praesentium placeat inventore autem debitis, sequi repellendus obcaecati corporis nostrum blanditiis excepturi. Commodi cumque hic facilis quas officiis reiciendis fugit. Fugit earum, exercitationem voluptas ratione, expedita pariatur incidunt, harum tenetur veritatis non sint. Quas animi aperiam officiis tempore qui omnis, iste quae, ipsam sapiente quaerat laudantium, magnam praesentium nemo distinctio architecto accusantium aut. Laboriosam inventore dignissimos hic labore provident laudantium similique veritatis cumque architecto assumenda. Earum molestiae optio voluptas, eum error dicta, temporibus laudantium consectetur assumenda totam nesciunt non maxime quis, eveniet quam.  "
      />

      <Alert  
          type = {"alert-success"}
          icon = {<MailCheck />}
          title = {"congratulation!"}
          desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. In veniam aspernatur doloribus voluptates rerum commodi non accusamus ab optio fuga illo minus impedit odit magnam praesentium placeat inventore autem debitis, sequi repellendus obcaecati corporis nostrum blanditiis excepturi. Commodi cumque hic facilis quas officiis reiciendis fugit. Fugit earum, exercitationem voluptas ratione, expedita pariatur incidunt, harum tenetur veritatis non sint. Quas animi aperiam officiis tempore qui omnis, iste quae, ipsam sapiente quaerat laudantium, magnam praesentium nemo distinctio architecto accusantium aut. Laboriosam inventore dignissimos hic labore provident laudantium similique veritatis cumque architecto assumenda. Earum molestiae optio voluptas, eum error dicta, temporibus laudantium consectetur assumenda totam nesciunt non maxime quis, eveniet quam.  "
      />
    </>
  )
}

export default App
