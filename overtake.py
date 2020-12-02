class overtake():
    def __init__(self, tmax, tmin, hmax, hmin):
        self.tmax = tmax
        self.tmin = tmin
        self.hmax = hmax
        self.hmin = hmin

    def isovert(self, tem):
        n = 0
        if (tem <= self.tmin):
            n = 1
            return n

        elif (tem >= self.tmax):
            n = 2
            return n

        else:
            return n

    def isoverh(self, hum):
        n = 0
        if (hum <= self.hmin):
            n = 1
            return n

        elif (hum >= self.hmax):
            n = 2
            return n

        else:
            return n











