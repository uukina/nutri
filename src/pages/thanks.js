import React from "react"
import { Link } from "gatsby"
import { RiArrowLeftSLine, RiCheckboxCircleLine } from "react-icons/ri"

import Seo from "../components/seo"
import Layout from "../components/layout"

const Thanks = () => (
  <Layout className="thanks-page">
    <Seo title="Thank you" />
    <div
      className="wrapper"
      style={{
        textAlign: "center",
      }}
    >
      <RiCheckboxCircleLine
        style={{
          fontSize: "128px",
          color: "var(--primary-color)",
        }}
      />
      <h1>Pesan terkirim</h1>
      <p>Terimakasih telah menghubungi kami, kami akan membalas pesanmu segera.</p>
      <Link to="/" className="button">
        <RiArrowLeftSLine className="icon -left" />
        Kembali ke halaman utama
      </Link>
    </div>
  </Layout>
)

export default Thanks
