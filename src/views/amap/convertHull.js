// 求出点在线的左侧还是右侧
function orientation(p, i, q) {
  const val = (i.y - p.y) * (q.x - i.x) - (i.x - p.x) * (q.y - i.y)
  // 点位共线
  if (val === 0) return 0
  // 顺时针或逆时针方向
  return (val > 0) ? 1 : 2
}

function convexHull(points) {
  // 去掉重复点位
  const uniquePoints = [...new Set(points.map(p => JSON.stringify(p)))].map(p => JSON.parse(p))
  const pointNumbs = uniquePoints.length
  // 凸包至少需要3个点位
  if (pointNumbs < 3) return []

  const hull = []
  let leftmostIndex = 0
  // 找到最左边的点位
  for (let i = 1; i < pointNumbs; i++) {
    // 此处按凸包顶点逆时针找点位顺序，所以如果此三点为逆时针方向，则不是最远的顶点
    // 也可以改为顺时针查找，凸包结果顺序随之改变
    if (uniquePoints[i].x < uniquePoints[leftmostIndex].x) {
      leftmostIndex = i
    }
  }

  let p = leftmostIndex
  let q

  do {
    // p为已确认顶点，放入数组
    hull.push(uniquePoints[p])
    q = (p + 1) % pointNumbs
    // 找到下一个更远的顶点
    for (let i = 0; i < pointNumbs; i++) {
      if (orientation(uniquePoints[p], uniquePoints[i], uniquePoints[q]) === 1) {
        q = i
      }
    }
    // 把p设置为已求出的顶点
    p = q
    // 直到回到起始点
  } while (p !== leftmostIndex)

  // 转换为线段数组
  const segments = []
  for (let i = 0; i < hull.length; i++) {
    const startPoint = hull[i]
    const endPoint = hull[(i + 1) % hull.length]
    segments.push([startPoint, endPoint])
  }

  return { segments, hull }
}

export { convexHull }
