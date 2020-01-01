import React, { useState, useCallback } from "react"
import { Layout } from "../componets"
import Gallery from "react-photo-gallery"
import Carousel, { Modal, ModalGateway } from "react-images"
import { useStaticQuery, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Classes from "./Styles/Wit.module.scss"

const WIT = props => {
  const all_data = useStaticQuery(graphql`
    {
      allContentfulWit {
        nodes {
          title
          info
          details {
            json
          }
          gallery {
            file {
              url
            }
          }
          slider {
            file {
              url
            }
          }
        }
      }
    }
  `)

  const photos = all_data.allContentfulWit.nodes[0].slider.file
  console.log(photos, "here is photo")
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  return (
    <Layout>
      <div>
        <div>
          <img src={photos.url} width="100%" />
        </div>
        <div>
          <p className={Classes.detail}>
            {documentToReactComponents(
              all_data.allContentfulWit.nodes[0].details.json
            )}
          </p>
        </div>
        <div className={Classes.galleryInfo}>
          <h3 className={Classes.title}>
            {all_data.allContentfulWit.nodes[0].title}
          </h3>
        </div>
        <p className={Classes.info}>
          {all_data.allContentfulWit.nodes[0].info}
        </p>
        <div style={{ marginTop: "600px" }}>
          {/* <Gallery photos={photos} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={photos.map(x => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title,
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway> */}
        </div>
      </div>
    </Layout>
  )
}

export default WIT
