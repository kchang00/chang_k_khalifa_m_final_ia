import matplotlib.pyplot as plt
import numpy as np

# plots

with plt.style.context('Solarize_Light2'):
    N = 5
    hatched = (150000, 190000, 160000, 110000, 230000)
    received = (200000, 230000, 170000, 130000, 250000)
    ind = np.arange(N)    # the x locations for the groups
    width = 0.5       # the width of the bars: can also be len(x) sequence

    p1 = plt.bar(ind, hatched, width)
    p2 = plt.bar(ind, received, width,
                 bottom=received)

    plt.ylabel('Number of Eggs')
    plt.xlabel('We successfully hatch 86 percent of the eggs we receive!')
    plt.title('Number of Eggs Received and Hatched')
    plt.xticks(ind, ('2014', '2015', '2016', '2017', '2018'))
    plt.yticks(np.arange(0, 600000, 100000))
    plt.legend((p1[0], p2[0]), ('Total Hatched', 'Total Received'))

    plt.show()

# members

with plt.style.context('Solarize_Light2'):
    x = ['2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018']
    y = [52, 48, 67, 45, 45, 50, 55, 67, 65, 70, 60, 60, 55, 60, 65, 75, 80]
    width = 0.1

    x_pos = [i for i, _ in enumerate(x)]

    plt.bar(x_pos, y)
    plt.xlabel("Year")
    plt.ylabel("Members")
    plt.title("Members in the TRAA Across the Years")

    plt.xticks(x_pos, x)

    plt.show()

# electrofishing data

with plt.style.context('Solarize_Light2'):
    komoka = (15 + 14 + 23)
    oxbow = (10 + 18 + 12)
    dingman = (13 + 15 + 14)

    labels = ['Komoka: 52', 'Oxbow: 40', 'Dingman: 42']
    sizes = [komoka, oxbow, dingman]
    colors = ['#33FF9F', '#0BC8FF', '#009B3D']
    patches, texts = plt.pie(sizes, colors=colors, shadow=True, startangle=90)
    plt.legend(patches, labels, loc="best")
    plt.title("Rainbow Trout Caught Across Ontario")
    plt.axis('equal')
    plt.tight_layout()
    plt.show()
