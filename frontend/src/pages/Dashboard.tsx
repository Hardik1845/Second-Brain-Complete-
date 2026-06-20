import "../App.css"
import { useState } from "react"
import { Button } from "../components/Button"
import { PlusIcon } from "../icons/PlusIcon"
import { ShareIcon } from "../icons/ShareIcon"
import { Card } from "../components/Card"
import { Modal } from "../components/Modal"
import { Sidebar } from "../components/Sidebar"
import { useContent } from "../hooks/useContent"
import { BACKEND_URL, SHARE_URL } from "../config"
import { copyToClipboard } from "../hooks/CopyToClipboard"
import axios from "axios"

export  function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const contents = useContent()
  async function ShareBrain(){
    const data ={
      share:true
    }
  const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`,data,{
    headers:{
      authorization:localStorage.getItem("token")
    }
  })
  const url = `${SHARE_URL}${response.data.hash}`
  alert(url);
  copyToClipboard(url)
  }
  
  return (
    <>
      <Sidebar />

      {/* All content pushed right by sidebar width */}
      <div className="ml-56">
        <Modal open={modalOpen} onClose={() => setModalOpen(false)} />

        <div className="flex justify-end gap-4 p-4">
          <Button variant="secondary" text="Share Brain" startIcon={<ShareIcon />} onClick={ShareBrain} />
          <Button variant="primary" text="Add Content" startIcon={<PlusIcon />} onClick={() => setModalOpen(true)} />
        </div>

       <div className="flex gap-2 p-4 flex-wrap">
    {contents.map((content) => (
        <Card
            key={content._id}
            type={content.type}
            title={content.title}
            link={content.link}
        />
    ))}
</div>
      </div>
    </>
  )
}