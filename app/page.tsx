"use client"

import { useState } from "react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Users, Building2, GraduationCap, BookOpen, Calendar, TrendingUp, FileText } from "lucide-react"

type MenuItem = "dashboard" | "dudi" | "magang" | "logbook"

export default function Dashboard() {
  const [activeMenu, setActiveMenu] = useState<MenuItem>("dashboard")
  const [activeTab, setActiveTab] = useState<"siswa" | "guru">("siswa")

  const renderDashboardContent = () => (
    <>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Siswa</CardTitle>
            <Users className="w-5 h-5 text-[#00b8db]" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">150</div>
            <p className="text-xs text-gray-500 mt-1">Seluruh siswa terdaftar</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">DUDI Partner</CardTitle>
            <Building2 className="w-5 h-5 text-[#00b8db]" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">45</div>
            <p className="text-xs text-gray-500 mt-1">Perusahaan mitra</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Siswa Magang</CardTitle>
            <GraduationCap className="w-5 h-5 text-[#00b8db]" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">120</div>
            <p className="text-xs text-gray-500 mt-1">Sedang aktif magang</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Logbook Hari Ini</CardTitle>
            <BookOpen className="w-5 h-5 text-[#00b8db]" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">85</div>
            <p className="text-xs text-gray-500 mt-1">Laporan masuk hari ini</p>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Magang Terbaru */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <GraduationCap className="w-5 h-5 text-[#00b8db]" />
              <span>Magang Terbaru</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Avatar className="w-10 h-10 bg-gradient-to-r from-[#00b8db] to-[#0099b8]">
                  <AvatarFallback className="bg-gradient-to-r from-[#00b8db] to-[#0099b8] text-white">
                    AR
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-gray-900">Ahmad Rizki</p>
                  <p className="text-sm text-gray-500">PT. Teknologi Nusantara</p>
                  <p className="text-xs text-gray-400 flex items-center mt-1">
                    <Calendar className="w-3 h-3 mr-1" />
                    15/1/2024 - 15/4/2024
                  </p>
                </div>
              </div>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Aktif</Badge>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Avatar className="w-10 h-10 bg-gradient-to-r from-[#00b8db] to-[#0099b8]">
                  <AvatarFallback className="bg-gradient-to-r from-[#00b8db] to-[#0099b8] text-white">
                    SN
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-gray-900">Siti Nurhaliza</p>
                  <p className="text-sm text-gray-500">CV. Digital Kreativa</p>
                </div>
              </div>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Aktif</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Progress Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-purple-500" />
              <span>Progress Overview</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Siswa Aktif Magang</span>
                <span className="text-sm font-bold text-gray-900">80%</span>
              </div>
              <Progress value={80} className="h-2" />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Logbook Hari Ini</span>
                <span className="text-sm font-bold text-gray-900">71%</span>
              </div>
              <Progress value={71} className="h-2" />
            </div>

            <Separator />

            <div className="flex items-center space-x-2">
              <Building2 className="w-5 h-5 text-orange-500" />
              <span className="font-medium text-gray-900">DUDI Aktif</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )

  const renderDUDIContent = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-600">Total DUDI</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">45</div>
            <p className="text-xs text-gray-500">Perusahaan terdaftar</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-600">DUDI Aktif</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">38</div>
            <p className="text-xs text-gray-500">Sedang menerima siswa</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-600">Kapasitas Tersedia</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">25</div>
            <p className="text-xs text-gray-500">Slot magang kosong</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Daftar DUDI Partner</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nama Perusahaan</TableHead>
                <TableHead>Bidang</TableHead>
                <TableHead>Lokasi</TableHead>
                <TableHead>Kapasitas</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">PT. Teknologi Nusantara</TableCell>
                <TableCell>IT & Software</TableCell>
                <TableCell>Surabaya</TableCell>
                <TableCell>15 siswa</TableCell>
                <TableCell>
                  <Badge className="bg-green-100 text-green-800">Aktif</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">CV. Digital Kreativa</TableCell>
                <TableCell>Desain Grafis</TableCell>
                <TableCell>Surabaya</TableCell>
                <TableCell>8 siswa</TableCell>
                <TableCell>
                  <Badge className="bg-green-100 text-green-800">Aktif</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">PT. Maju Bersama</TableCell>
                <TableCell>Manufaktur</TableCell>
                <TableCell>Sidoarjo</TableCell>
                <TableCell>20 siswa</TableCell>
                <TableCell>
                  <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )

  const renderMagangContent = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-600">Total Siswa Magang</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">120</div>
            <p className="text-xs text-gray-500">Sedang aktif</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-600">Selesai Magang</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">85</div>
            <p className="text-xs text-gray-500">Tahun ini</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-600">Rata-rata Nilai</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">87.5</div>
            <p className="text-xs text-gray-500">Dari 100</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-600">Tingkat Kelulusan</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">95%</div>
            <p className="text-xs text-gray-500">Berhasil lulus</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Data Siswa Magang</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nama Siswa</TableHead>
                <TableHead>Kelas</TableHead>
                <TableHead>Tempat Magang</TableHead>
                <TableHead>Periode</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Ahmad Rizki</TableCell>
                <TableCell>XII RPL 1</TableCell>
                <TableCell>PT. Teknologi Nusantara</TableCell>
                <TableCell>Jan - Apr 2024</TableCell>
                <TableCell>
                  <Badge className="bg-blue-100 text-blue-800">Berlangsung</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Siti Nurhaliza</TableCell>
                <TableCell>XII MM 2</TableCell>
                <TableCell>CV. Digital Kreativa</TableCell>
                <TableCell>Jan - Apr 2024</TableCell>
                <TableCell>
                  <Badge className="bg-blue-100 text-blue-800">Berlangsung</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Budi Santoso</TableCell>
                <TableCell>XII TKJ 1</TableCell>
                <TableCell>PT. Network Solutions</TableCell>
                <TableCell>Sep - Des 2023</TableCell>
                <TableCell>
                  <Badge className="bg-green-100 text-green-800">Selesai</Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )

  const renderLogbookContent = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-600">Logbook Hari Ini</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">85</div>
            <p className="text-xs text-gray-500">Laporan masuk</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-600">Pending Review</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">12</div>
            <p className="text-xs text-gray-500">Menunggu persetujuan</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-600">Rata-rata Aktivitas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">6.8</div>
            <p className="text-xs text-gray-500">Jam per hari</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Logbook Terbaru</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Siswa</TableHead>
                <TableHead>Tanggal</TableHead>
                <TableHead>Aktivitas</TableHead>
                <TableHead>Durasi</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Ahmad Rizki</TableCell>
                <TableCell>15 Jan 2024</TableCell>
                <TableCell>Membuat aplikasi web dengan React</TableCell>
                <TableCell>8 jam</TableCell>
                <TableCell>
                  <Badge className="bg-green-100 text-green-800">Disetujui</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Siti Nurhaliza</TableCell>
                <TableCell>15 Jan 2024</TableCell>
                <TableCell>Desain poster untuk kampanye produk</TableCell>
                <TableCell>7 jam</TableCell>
                <TableCell>
                  <Badge className="bg-yellow-100 text-yellow-800">Review</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Budi Santoso</TableCell>
                <TableCell>14 Jan 2024</TableCell>
                <TableCell>Konfigurasi server dan network</TableCell>
                <TableCell>6 jam</TableCell>
                <TableCell>
                  <Badge className="bg-green-100 text-green-800">Disetujui</Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )

  const renderContent = () => {
    switch (activeMenu) {
      case "dashboard":
        return renderDashboardContent()
      case "dudi":
        return renderDUDIContent()
      case "magang":
        return renderMagangContent()
      case "logbook":
        return renderLogbookContent()
      default:
        return renderDashboardContent()
    }
  }

  const getPageTitle = () => {
    switch (activeMenu) {
      case "dashboard":
        return "Dashboard"
      case "dudi":
        return "DUDI (Dunia Usaha & Industri)"
      case "magang":
        return "Data Magang Siswa"
      case "logbook":
        return "Logbook Harian"
      default:
        return "Dashboard"
    }
  }

  const getPageDescription = () => {
    switch (activeMenu) {
      case "dashboard":
        return "Selamat datang di sistem pelaporan magang siswa SMK Negeri 1 Surabaya"
      case "dudi":
        return "Kelola data perusahaan mitra dan industri tempat siswa melaksanakan magang"
      case "magang":
        return "Pantau progress dan data siswa yang sedang melaksanakan program magang"
      case "logbook":
        return "Review dan kelola laporan harian aktivitas siswa selama magang"
      default:
        return "Selamat datang di sistem pelaporan magang siswa SMK Negeri 1 Surabaya"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-[#00b8db] to-[#0099b8] rounded-xl flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-900">Magang</h1>
              <p className="text-sm text-gray-500">Portal Siswa</p>
            </div>
            <div className="ml-8">
              <h2 className="text-lg font-medium text-gray-900">SMK Negeri 1 Surabaya</h2>
              <p className="text-sm text-gray-500">Sistem Pelaporan Magang Siswa</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Avatar className="w-10 h-10 bg-gradient-to-r from-[#00b8db] to-[#0099b8]">
              <AvatarFallback className="bg-gradient-to-r from-[#00b8db] to-[#0099b8] text-white">GP</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium text-gray-900">Guru Pembimbing</p>
              <p className="text-xs text-gray-500">Admin</p>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
          <nav className="p-4 space-y-2">
            <div
              className={`flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer transition-all ${
                activeMenu === "dashboard"
                  ? "bg-gradient-to-r from-[#00b8db] to-[#0099b8] text-white"
                  : "hover:bg-gray-50"
              }`}
              onClick={() => setActiveMenu("dashboard")}
            >
              <div className={`w-5 h-5 rounded ${activeMenu === "dashboard" ? "bg-white/20" : "bg-gray-400"}`}></div>
              <div>
                <p className={`text-sm font-medium ${activeMenu === "dashboard" ? "text-white" : "text-gray-900"}`}>
                  Dashboard
                </p>
                <p className={`text-xs ${activeMenu === "dashboard" ? "text-white/80" : "text-gray-500"}`}>
                  Ringkasan aktivitas
                </p>
              </div>
            </div>

            <div
              className={`flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer transition-all ${
                activeMenu === "dudi" ? "bg-gradient-to-r from-[#00b8db] to-[#0099b8] text-white" : "hover:bg-gray-50"
              }`}
              onClick={() => setActiveMenu("dudi")}
            >
              <FileText className={`w-5 h-5 ${activeMenu === "dudi" ? "text-white" : "text-gray-400"}`} />
              <div>
                <p className={`text-sm font-medium ${activeMenu === "dudi" ? "text-white" : "text-gray-700"}`}>DUDI</p>
                <p className={`text-xs ${activeMenu === "dudi" ? "text-white/80" : "text-gray-500"}`}>
                  Dunia Usaha & Industri
                </p>
              </div>
            </div>

            <div
              className={`flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer transition-all ${
                activeMenu === "magang" ? "bg-gradient-to-r from-[#00b8db] to-[#0099b8] text-white" : "hover:bg-gray-50"
              }`}
              onClick={() => setActiveMenu("magang")}
            >
              <GraduationCap className={`w-5 h-5 ${activeMenu === "magang" ? "text-white" : "text-gray-400"}`} />
              <div>
                <p className={`text-sm font-medium ${activeMenu === "magang" ? "text-white" : "text-gray-700"}`}>
                  Magang
                </p>
                <p className={`text-xs ${activeMenu === "magang" ? "text-white/80" : "text-gray-500"}`}>
                  Data magang saya
                </p>
              </div>
            </div>

            <div
              className={`flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer transition-all ${
                activeMenu === "logbook"
                  ? "bg-gradient-to-r from-[#00b8db] to-[#0099b8] text-white"
                  : "hover:bg-gray-50"
              }`}
              onClick={() => setActiveMenu("logbook")}
            >
              <BookOpen className={`w-5 h-5 ${activeMenu === "logbook" ? "text-white" : "text-gray-400"}`} />
              <div>
                <p className={`text-sm font-medium ${activeMenu === "logbook" ? "text-white" : "text-gray-700"}`}>
                  Logbook
                </p>
                <p className={`text-xs ${activeMenu === "logbook" ? "text-white/80" : "text-gray-500"}`}>
                  Catatan harian
                </p>
              </div>
            </div>
          </nav>

          <div className="absolute bottom-4 left-4 flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <div>
              <p className="text-xs font-medium text-gray-900">SMK Negeri 1 Surabaya</p>
              <p className="text-xs text-gray-500">Sistem Pelaporan v1.0</p>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Tab Navigation */}
          <div className="flex space-x-1 mb-6">
            <Button
              className={`px-6 ${activeTab === "siswa" ? "bg-gradient-to-r from-[#00b8db] to-[#0099b8] hover:from-[#0099b8] hover:to-[#007a9b] text-white" : "bg-white text-gray-600 hover:bg-gray-50"}`}
              onClick={() => setActiveTab("siswa")}
            >
              Siswa
            </Button>
            <Button
              variant="ghost"
              className={`text-gray-600 px-6 ${activeTab === "guru" ? "bg-gradient-to-r from-[#00b8db] to-[#0099b8] text-white hover:from-[#0099b8] hover:to-[#007a9b]" : "hover:bg-gray-50"}`}
              onClick={() => setActiveTab("guru")}
            >
              Guru
            </Button>
          </div>

          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{getPageTitle()}</h1>
            <p className="text-gray-600">{getPageDescription()}</p>
          </div>

          {/* Dynamic Content */}
          {renderContent()}
        </main>
      </div>
    </div>
  )
}
